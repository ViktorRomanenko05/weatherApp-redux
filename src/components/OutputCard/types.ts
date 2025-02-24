export interface OutputCardProps{
    temperature?: number;
    cityName?: string;
    error?: string;
    bgImage?:string;
    onDeleteClick?:  () => void;
    onSaveClick?: () => void;
    cardAtHomePage?: boolean;
}