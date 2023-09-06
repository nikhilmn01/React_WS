import AppTitle from './AppTitle';
import AppBody from './AppBody';

function ContainerDetails(props) {
  return (
    <div>
      <AppTitle keyConceptsImage={props.keyConceptsImage}/>
      <AppBody concepts={props.concepts}/>
    </div>
  );
}

export default ContainerDetails;
