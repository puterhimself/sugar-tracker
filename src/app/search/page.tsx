'use client'
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const SugarRatingApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sugarInfo, setSugarInfo] = useState<any>();

  const handleSearch = () => {
    // In a real app, this would make an API call to get the sugar information
    // For this example, we'll use mock data
    const mockData = {
      name: searchTerm,
      sugarPer100g: Math.floor(Math.random() * 20),
      sugarLevel: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)]
    };
    setSugarInfo(mockData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sugar Rating App</h1>
      <div className="flex gap-2 mb-4">
        <Input
          type="text"
          placeholder="Search for a product"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Button onClick={handleSearch}>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>
      {sugarInfo && (
        <Card>
          <CardHeader>
            <CardTitle>{sugarInfo.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Sugar per 100g: {sugarInfo.sugarPer100g}g</p>
            <p>Sugar Level: {sugarInfo.sugarLevel}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SugarRatingApp;