import { Carousel} from "react-bootstrap"
import dishes from '../data/menu.json'

const Recipe = () => (


    <Carousel fade style={{ width: '50%'}}>
        { dishes.map( (dish) => (  
      <Carousel.Item key={dish.id}>
          <img
             className="d-block w-100"
             src={dish.image}
             alt="First slide"
             style={{height: '400px'}}
           />
        <Carousel.Caption>
          <h3>{dish.name}</h3>
          <p>{dish.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}

    </Carousel>




//         <Card style={{ width: '18rem' }} >
//   <Card.Img variant="top" src={dish.image} />
//   </Card>
 
)


// )

export default Recipe