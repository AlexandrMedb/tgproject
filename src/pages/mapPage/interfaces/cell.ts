interface npc {
  imgLink?: string;
  name: string;
  size?: "small" | "medium" | "large" | "huge";
}

export interface Cell {
  size: number;
  npc?: npc;
}
