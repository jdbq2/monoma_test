// TYPES DEL LOGIN Y USUARIO
declare type LoginData = {
    email: string;
    password: string;
};

declare interface LoginResponse {
    message: string;
    user: User;
}

declare interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    token: string;
    image: string;
}

// TYPES DE LAS PETICIONES A LA API DE POKEMON

declare interface PokemonPaginationResponse {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

declare interface PokemonTransformedResponse {
    count: string;
    pokemons: Pokemon[];
}

declare interface Result {
    name: string;
    url: string;
}

declare interface Pokemon {
    abilities: Ability[];
    base_experience: number;
    forms: Species[];
    game_indices: GameIndex[];
    height: number;
    held_items: any[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: Move[];
    name: string;
    order: number;
    past_types: any[];
    species: Species;
    sprites: Sprites;
    stats: Stat[];
    types: Type[];
    weight: number;
}

declare interface Ability {
    ability: Species;
    is_hidden: boolean;
    slot: number;
}

declare interface Species {
    name: string;
    url: string;
}

declare interface GameIndex {
    game_index: number;
    version: Species;
}

declare interface Move {
    move: Species;
    version_group_details: VersionGroupDetail[];
}

declare interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: Species;
    version_group: Species;
}

declare interface GenerationV {
    "black-white": Sprites;
}

declare interface GenerationIv {
    "diamond-pearl": Sprites;
    "heartgold-soulsilver": Sprites;
    platinum: Sprites;
}

declare interface Versions {
    "generation-i": GenerationI;
    "generation-ii": GenerationIi;
    "generation-iii": GenerationIii;
    "generation-iv": GenerationIv;
    "generation-v": GenerationV;
    "generation-vi": { [key: string]: Home };
    "generation-vii": GenerationVii;
    "generation-viii": GenerationViii;
}

declare interface Sprites {
    back_default: string;
    back_female: null;
    back_shiny: string;
    back_shiny_female: null;
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
    other?: Other;
    versions?: Versions;
    animated?: Sprites;
}

declare interface GenerationI {
    "red-blue": RedBlue;
    yellow: RedBlue;
}

declare interface RedBlue {
    back_default: string;
    back_gray: string;
    back_transparent: string;
    front_default: string;
    front_gray: string;
    front_transparent: string;
}

declare interface GenerationIi {
    crystal: Crystal;
    gold: Gold;
    silver: Gold;
}

declare interface Crystal {
    back_default: string;
    back_shiny: string;
    back_shiny_transparent: string;
    back_transparent: string;
    front_default: string;
    front_shiny: string;
    front_shiny_transparent: string;
    front_transparent: string;
}

declare interface Gold {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
    front_transparent?: string;
}

declare interface GenerationIii {
    emerald: OfficialArtwork;
    "firered-leafgreen": Gold;
    "ruby-sapphire": Gold;
}

declare interface OfficialArtwork {
    front_default: string;
    front_shiny: string;
}

declare interface Home {
    front_default: string;
    front_female: null;
    front_shiny: string;
    front_shiny_female: null;
}

declare interface GenerationVii {
    icons: DreamWorld;
    "ultra-sun-ultra-moon": Home;
}

declare interface DreamWorld {
    front_default: string;
    front_female: null;
}

declare interface GenerationViii {
    icons: DreamWorld;
}

declare interface Other {
    dream_world: DreamWorld;
    home: Home;
    "official-artwork": OfficialArtwork;
}

declare interface Stat {
    base_stat: number;
    effort: number;
    stat: Species;
}

declare interface Type {
    slot: number;
    type: Species;
}
