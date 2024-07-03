

export type courseType = {
    title: string,
    totoalLearner: number
}

export type RecentPostType = {
    RecentPost: {
        title: string,
        submittedDate: string,
        amountOfCourses:number,
        type:string
    }[]
}

export const postData = [
    { id: "1", name: "Golanginya", time: "5 mins ago", title: "How to patch KDE on FreeBSD?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["framework"], view: 125, comment: 15, reaction: 155 },
    { id: "2", name: "Linuxoid", time: "22 mins ago", title: "What is a difference between Java nad JavaScript?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["java", "javascript"], view: 125, comment: 15, reaction: 155 },
    { id: "3", name: "Jeffrey", time: "2 days ago", title: "is Expressjs a node framework", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["expressjs"], view: 125, comment: 15, reaction: 155 },
    { id: "4", name: "Lola", time: "3 days ago", title: "I want to study Svelte JS Framework. What is the best resourse should I use?", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["react", "angular", "vue"], view: 125, comment: 15, reaction: 155 },
    { id: "5", name: "Linuxoid", time: "1 week ago", title: "Which is the better Frontend framework", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["react"], view: 125, comment: 15, reaction: 155 },
    { id: "6", name: "frank", time: "2 months ago", title: "What is Css", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla", tag: ["css"], view: 125, comment: 15, reaction: 155 },
  ]

  export const PostComments = [
    {id:"1",name:"@unkind",time:"12 November 2020 19:35",commentContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, scelerisque. Netus nisl nulla placerat dignissim ipsum arcu.",like:12,dislike:2,replies:[
        {id:"1",name:"by @lazyReplyer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna."}
    ]},
    {id:"2",name:"@morgenshtern",time:"12 November 2020 19:35",commentContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, scelerisque. Netus nisl nulla placerat dignissim ipsum arcu.",like:24,dislike:4,replies:[
        {id:"1",name:"by @lazyReplyer",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna."}
    ]},
    {id:"3",name:"@kizaru",time:"12 November 2020 19:35",commentContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare rutrum amet, a nunc mi lacinia in iaculis. Pharetra ut integer nibh urna. Placerat ut adipiscing nulla lectus vulputate massa, scelerisque. Netus nisl nulla placerat dignissim ipsum arcu.",like:100,dislike:30,replies:[
        
    ]}
  ]

export type StudentPostType = {
        id:string
        name:string,
        title:string,
        time:string,
        content:string,
        tag:string[],
        view:number,
        comment:number,
        reaction:number
}