import MartinImg from '../public/images/martin.jpg';
import ChristerImg from '../public/images/christer.jpg';
import NilsImg from '../public/images/nils.jpg';
import IsakImg from '../public/images/isak.jpg';

export interface IPerson {
  title: string;
  name: string;
  mail: string;
  description: string;
  imgUrl: StaticImageData;
}

export const persons: IPerson[] = [
  {
    title: 'Webbutvecklare',
    name: 'Martin Hansson',
    imgUrl: MartinImg,
    mail: 'alegherix@gmail.com',
    description:
      'Martin studerar Webbutvecklare programmet på Yrgo. Han har varit ansvarig för att skapa design & layout. Utöver det har han även sett till att koppla samman Unity projektet som styr den interaktiva miljön med Next.js som agerar som ramverk för att se till att projektet kan existera på webben.',
  },
  {
    title: 'Game Creator Programmer',
    name: 'Christer Högberg',
    imgUrl: ChristerImg,
    mail: 'mail...',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda.',
  },
  {
    title: 'Manusförfattare',
    name: 'Nils Alatalo',
    imgUrl: NilsImg,
    mail: 'haverifilm@gmail.com',
    description:
      'Nils studerar Manusförfattare hos Yrgo, andra året. I detta projekt har han ansvarat för den övergripande story-strukturen, alla individuella text-stycken, och han gjorde även research om kunden. Utanför detta projekt så skriver han oftast film- och tv-manus, och då och då hoppar han också in som filmarbetare på diverse filmproduktioner.',
  },
  {
    title: 'Game Creator Artist',
    name: 'Isak Alfredsson',
    imgUrl: IsakImg,
    mail: 'mail...',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium explicabo autem cumque voluptate! Nam, repellat? Accusamus totam dignissimos veritatis et. Laudantium quis aut doloribus sit, adipisci non hic provident illum tenetur, ex, ducimus impedit quae facere eum eveniet esse assumenda.',
  },
];

export default persons;
