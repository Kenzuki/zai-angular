export interface DialogConfig {
    title: string;
    fields: DialogField[];
    acceptCallback: (item: any) => void;
    acceptLabel?: string;
    rejectLabel?: string;
}

export interface DialogField {
    label: string;
    field: string;
    type: 'text' | 'number';
    helpText?: string;
    required?: boolean;
}