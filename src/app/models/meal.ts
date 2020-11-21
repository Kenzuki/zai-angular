export interface Meal {
    id: number,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    preparingDuration: number,
    rating: number,
    categories: MealType[]
}

export enum MealType {
    PASTA = "Makarony",
    LETCHO = "Leczo",
    CAKE = "Placek",
    PANCAKE = "Naleśnik",
    SMOOTHIE = "Smoothie",
    WITH_BUCKWHEAT = "Danie z kaszą gryczaną",
    WITH_COURGETTE = "Danie z cukinii",
    DINNER = "Na obiad"
};