"use client";
import { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Layers } from "lucide-react";
import Link from "next/link";
import L from "leaflet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { UserButton } from "@clerk/nextjs";

interface Mine {
  id: number;
  name: string;
  lat: number;
  lng: number;
  carbonFootprint: number;
}

const mines: Mine[] = [
  { id: 1, name: "NLC Mine 2", lat: 11.6173, lng: 79.4941, carbonFootprint: 500000 },
  { id: 2, name: "Bhagdeva Coal Mine", lat: 22.9260, lng: 83.1943, carbonFootprint: 750000 },
  { id: 3, name: "Mine A", lat: 20.5937, lng: 78.9629, carbonFootprint: 300000 },
  { id: 4, name: "Mine B", lat: 15.3173, lng: 75.7139, carbonFootprint: 450000 },
  { id: 5, name: "Mine C", lat: 21.1458, lng: 79.0882, carbonFootprint: 600000 },
  { id: 6, name: "Mine D", lat: 26.8467, lng: 80.9462, carbonFootprint: 700000 },
  { id: 7, name: "Mine E", lat: 19.0760, lng: 72.8777, carbonFootprint: 800000 },
];

// Custom icon for markers
const customIcon = new Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// Function to determine marker color based on carbon footprint
const getMarkerColor = (carbonFootprint: number) => {
  if (carbonFootprint < 300000) return "bg-emerald-500";
  if (carbonFootprint < 600000) return "bg-yellow-500";
  if (carbonFootprint < 900000) return "bg-orange-500";
  return "bg-red-500";
};

// Animated marker component
const AnimatedMarker = ({ mine, setActiveMarker }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), mine.id * 200);
    return () => clearTimeout(timer);
  }, [mine.id]);

  return (
    <Marker
      key={mine.id}
      position={[mine.lat, mine.lng]}
      icon={customIcon}
      eventHandlers={{
        click: () => setActiveMarker(mine.id),
      }}
      opacity={animate ? 1 : 0}
      transition={{ duration: 0.5 }}
    >
      <Popup>
        <div>
          <h2 className="font-bold">{mine.name}</h2>
          <p>Carbon Footprint: {mine.carbonFootprint.toLocaleString()} tons CO2e</p>
        </div>
      </Popup>
    </Marker>
  );
};

// Map view toggle component
const MapViewToggle = () => {
  const [isSatellite, setIsSatellite] = useState(false);
  const map = useMap();
  const tileLayerRef = useRef<L.TileLayer | null>(null);

  useEffect(() => {
    if (isSatellite) {
      const satelliteLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "Esri, NASA, NGA, USGS",
        }
      );
      if (tileLayerRef.current) {
        map.removeLayer(tileLayerRef.current);
      }
      tileLayerRef.current = satelliteLayer;
      map.addLayer(tileLayerRef.current);
    } else {
      if (tileLayerRef.current) {
        map.removeLayer(tileLayerRef.current);
      }
      tileLayerRef.current = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
        }
      );
      map.addLayer(tileLayerRef.current);
    }
  }, [isSatellite, map]);

  return (
    <Button
      className="absolute top-2 right-2 z-[1000]"
      onClick={() => setIsSatellite(!isSatellite)}
    >
      <Layers className="mr-2 h-4 w-4" />
      {isSatellite ? "Street View" : "Satellite View"}
    </Button>
  );
};

// Map Component
export default function EcoMap() {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMines, setFilteredMines] = useState(mines);
  const [selectedMine, setSelectedMine] = useState<number | null>(null);

  const totalCarbonFootprint = mines.reduce((sum, mine) => sum + mine.carbonFootprint, 0);

  useEffect(() => {
    setFilteredMines(
      mines.filter((mine) =>
        mine.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  useEffect(() => {
    if (selectedMine !== null) {
      const mine = mines.find((m) => m.id === selectedMine);
      if (mine) {
        const map = document.querySelector(".leaflet-container")?.__leaflet__;
        if (map) {
          map.setView([mine.lat, mine.lng], 10, {
            animate: true,
            duration: 1,
          });
        }
      }
    }
  }, [selectedMine]);

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Settings</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto flex items-center gap-2 px-5 py-5">
          <UserButton />
        </div>
      </header>
      <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Carbon Footprint Map</h1>
          <p className="text-muted-foreground">
            Visual Representation of carbon footprint across all your coal mines
          </p>
        </div>
        <div className="grid gap-8 mt-8">
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div>
                  <span className="ml-2 text-lg text-muted-foreground">Coal India Ltd. Mines</span>
                </div>
                <Badge variant="secondary" className="text-lg">
                  Total Footprint: {totalCarbonFootprint.toLocaleString()} tons CO2e
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4 relative">
                <Search className="absolute top-3 left-3 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for mines"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <MapContainer center={[20.5937, 78.9629]} zoom={5} className="w-full h-96">
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
                />
                {filteredMines.map((mine) => (
                  <AnimatedMarker
                    key={mine.id}
                    mine={mine}
                    setActiveMarker={setSelectedMine}
                  />
                ))}
                <MapViewToggle />
              </MapContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
