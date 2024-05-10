
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Category {
    BREAKFAST = "BREAKFAST",
    DESSERT = "DESSERT",
    DINNER = "DINNER",
    LUNCH = "LUNCH"
}

export interface CreateCommentInput {
    exampleField: number;
}

export interface CreateRecipeInput {
    category?: Nullable<Category[]>;
    chefId: string;
    cookingTime: number;
    description: string;
    imageUrl?: Nullable<string>;
    ingredients?: Nullable<string[]>;
    instructions?: Nullable<string[]>;
    likes: number;
    nutritionalInfo?: Nullable<string>;
    shares: number;
    tags?: Nullable<string[]>;
    title: string;
    videoUrl?: Nullable<string>;
}

export interface CreateUserInput {
    email: string;
    name: string;
    password: string;
}

export interface UpdateCommentInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateUserInput {
    email?: Nullable<string>;
    name?: Nullable<string>;
    password?: Nullable<string>;
}

export interface Comment {
    exampleField: number;
}

export interface IMutation {
    createComment(createCommentInput: CreateCommentInput): Comment | Promise<Comment>;
    createRecipe(createRecipeInput: CreateRecipeInput): Recipe | Promise<Recipe>;
    createUser(data: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
    deleteUser(id: string): Nullable<User> | Promise<Nullable<User>>;
    removeComment(id: number): Comment | Promise<Comment>;
    removeRecipe(id: number): Recipe | Promise<Recipe>;
    updateComment(updateCommentInput: UpdateCommentInput): Comment | Promise<Comment>;
    updateUser(data: UpdateUserInput, id: string): Nullable<User> | Promise<Nullable<User>>;
}

export interface IQuery {
    comment(id: number): Comment | Promise<Comment>;
    comments(): Comment[] | Promise<Comment[]>;
    findAll(): User[] | Promise<User[]>;
    findOne(id: string): Nullable<User> | Promise<Nullable<User>>;
    recipe(id: number): Recipe | Promise<Recipe>;
    recipes(): Recipe[] | Promise<Recipe[]>;
}

export interface Recipe {
    category?: Nullable<Category[]>;
    cookingTime: number;
    description?: Nullable<string>;
    id: string;
    imageUrl?: Nullable<string>;
    ingredients: string[];
    instructions: string[];
    likes: number;
    nutritionalInfo?: Nullable<JSON>;
    tags?: Nullable<string[]>;
    title: string;
    videoUrl?: Nullable<string>;
}

export interface User {
    email: string;
    id: string;
    name: string;
}

export type JSON = any;
type Nullable<T> = T | null;
