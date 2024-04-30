export class SectionData {
    constructor(title: string, content: string, subSections: SectionData[]){
        this.title = title;
        this.content = content;
        this.subSections = subSections;
    }
    public title: string;
    public content: string;
    public subSections: SectionData[];
}
