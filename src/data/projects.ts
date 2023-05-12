export const Projects = [
	{
		title: 'Project 1',
		process: [
			{
				title: 'New Request',
				color: 'bg-red-500',
				tasks: [
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Design', 'Frontend'],
					subtasks: [{title:'About', state: true},{title:'Careers', state: false},{title:'Contact', state: false}],
					comments: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'],
					link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/']
				},
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Marketing', 'Frontend'],
					subtasks: [{title:'About', state: true},{title:'Careers', state: true},{title:'Contact', state: false}],
					comments: ['a', 'b', 'c', 'd'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe'],
					link: ['https://www.google.com/', 'https://www.google.com/']
				},
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Backend'],
					subtasks: [{title:'About', state: true}],
					comments: ['a', 'b', 'c', 'd', 'e', 'f'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe'],
					link: []
				},
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Frontend'],
					subtasks: [],
					comments: [],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe'],
					link: []
				}
			]
			},
			{
				title: 'In Progress',
				color: 'bg-gray-500',
				tasks: [
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Backend'],
					subtasks: [],
					comments: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'],
					link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/']
				},
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Marketing', 'Frontend'],
					subtasks: [{title:'About', state: true},{title:'Careers', state: true},{title:'Contact', state: false}],
					comments: ['a', 'b', 'c', 'd'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe'],
					link: ['https://www.google.com/', 'https://www.google.com/']
				}
			]
			},
			{
				title: 'Completed',
				color: 'bg-green-500',
				tasks: [
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Design'],
					subtasks: [{title:'About', state: true},{title:'Careers', state: true},{title:'Contact', state: true}],
					comments: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'],
					link: ['https://www.google.com/', 'https://www.google.com/', 'https://www.google.com/']
				},
				{
					title: 'Pages "About" and "Careers"',
					description: 'All the details are in the file, I\'m sure it will turn out cool!',
					tags: ['Frontend'],
					subtasks: [{title:'About', state: true},{title:'Careers', state: true}],
					comments: ['a', 'b', 'c', 'd'],
					owner: 'John Doe',
					created: {
						date: '2021-10-10',
						time: '10:10'
					},
					members: ['John Doe'],
					link: ['https://www.google.com/', 'https://www.google.com/']
				}
			]
			}
		]
	}
]