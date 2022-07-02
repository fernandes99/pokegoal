export type PrimaryButtonType = {
    text: string;
    icon?: boolean;
    type?: string
};

export type ButtonType = {
    Primary: React.FC<PrimaryButtonType>,
}