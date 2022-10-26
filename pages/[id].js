
import { useRouter } from 'next/router';
import ModelViewer from '../components/Model'
import { compress } from '../next.config';

export async function getServerSideProps(context){
  let id=context.query.id;
  return{props:{id:id}}
}

// 
export default function Home(props) {

  return (
    <div>
      <ModelViewer id={props.id}/>
    </div>
  );
}
