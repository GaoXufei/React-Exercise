import { PostDto } from '@/interfaces/post.dto';

const list: PostDto[] = [];

for (let i = 0; i < 10; i++) {
  list.push({
    id: i,
    title: `title - ${i}`,
    content: `We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. - ${i}`,
    created: '2020-05-08',
    updated: '2020-10-10',
    user: {
      username: 'Gao',
      avatar: {
        url: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        filename: 'avatar'
      }
    }
  })
}

export default list;