export class SectionData {
    constructor(title: string, content: string, subSections: SectionData[],link: string){
        this.title = title;
        this.content = content;
        this.subSections = subSections;
        this.link = link;
    }
    public title: string;
    public content: string;
    public subSections: SectionData[];
    public link!: string;
}
