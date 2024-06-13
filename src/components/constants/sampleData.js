export const sampleChats=[{
    avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
    name:"John Doe",
    _id:"1",
    groupChat:false,
    members:["1","2"]
},
{
    avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
    name:"John Boi",
    _id:"2",
    groupChat:false,
    members:["1","2"]
}
]


export const sampleUsers=[{
    avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
    name:"John Doe",
    _id:"1",
},
{
    avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
    name:"John Boi",
    _id:"2",
}
];


export const sampleNotifications=[{
    sender:{
        avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
        name:"John Doe",
    },
    _id:"1",
},
{
    sender:{
        avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
        name:"John Boi",
    },
    _id:"2",
}
]

export const sampleMessages=[{
    attachments:[{
        public_id:"jhhj",
        url:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg",
    }],
    content:"hiii",
    _id:"jhjhj",
    sender:{
        _id:"user.id",
        name:"John Doe",
    },
    chat:"chatId",
    createdAt:"2021-11-17T15:30:00.000Z"

},
{
    attachments:[{
        public_id:"jhhj2",
        url:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg",
    }],
    content:"hiii",
    _id:"jhjhj2",
    sender:{
        _id:"hghgh",
        name:"John Doe",
    },
    chat:"chatId",
    createdAt:"2021-11-17T15:30:00.000Z"

},

];

export const dashboardData = {
    users:[
        {
            name:"John Doe",
            avatar:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg",
            _id:"1", 
            username:"johndoe",
            friends:20,
            groups:5        
        }
    ],
    chats:[
        {
            name:"Group Name",
            avatar:["https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"],
            _id:"1",
            groupChat:false, 
            members:[{_id:"1",avatar:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"},{_id:"2",avatar:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"}],
            totalMembers:2,
            totalMessages:20,
            creator:{
                name:"John Doe",
                avatar:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg",
            }

        }
    ],
    messages:[
        {
            attachments:[{public_id:"jhhj",url:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg"}],
            content:"hiii",
            _id:"jhjhj",
            sender:{
                avatar:"https://i.pngimg.me/thumb/f/720/m2H7K9A0Z5m2G6b1.jpg",
                name:"John Doe",
            },
            chat:"chatId",
            groupChat:"false",
            createdAt:"2021-11-17T15:30:00.000Z"
        }
    ]
}