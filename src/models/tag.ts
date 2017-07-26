import Tagging from './tagging';

class Tag {
    public name: string;
    public taggings: Tagging[] = [];

    constructor(
        name: string
    ) {
        this.name = name;
    }

    public setTaggings(taggings: Tagging[]): void {
        this.taggings = taggings;
    }

    public getTaggings(): Tagging[] {
        return this.taggings;
    }
}

export default Tag;
