import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";

interface FilterBarProps {
  onSortChange: (value: string) => void;
  onAgeFilterChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

const FilterBar = ({ onSortChange, onAgeFilterChange, onSearchChange }: FilterBarProps) => {
  return (
    <div className="bg-card rounded-xl border-2 border-border p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="h-5 w-5 text-primary" />
        <h3 className="font-heading font-bold text-lg">Filter & Sort</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name or story..."
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Sort By */}
        <Select onValueChange={onSortChange} defaultValue="votes">
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="votes">Most Votes</SelectItem>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="name">Name (A-Z)</SelectItem>
          </SelectContent>
        </Select>

        {/* Age Filter */}
        <Select onValueChange={onAgeFilterChange} defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Age group" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Ages</SelectItem>
            <SelectItem value="5-7">5-7 years</SelectItem>
            <SelectItem value="8-10">8-10 years</SelectItem>
            <SelectItem value="11-13">11-13 years</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex gap-2 pt-2">
        <Button variant="outline" size="sm" className="text-xs">
          🔥 Trending
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          ⭐ Featured
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          🎭 Drama
        </Button>
        <Button variant="outline" size="sm" className="text-xs">
          🦸 Adventure
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
