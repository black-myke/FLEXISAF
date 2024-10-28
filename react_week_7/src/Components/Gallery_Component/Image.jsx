import React from 'react'
import { Container } from '../Container'
import { Picture } from './Image.style'
import Lion from '../../Images/lion.jpg'
import Elephant from '../../Images/elephants_in_nature.jpeg'
import Waterfall from '../../Images/waterfall.jpeg'
import Woods from '../../Images/woods.jpg'
import Canoe from '../../Images/canoe.jpeg'
import Tree from '../../Images/tree.jpg'

const Image = () => {
  return (
    <div>
        <Container>
        <Picture src={Waterfall} />
        <Picture src={Lion} />
        <Picture src={Elephant} />
        <Picture src={Woods} />
        <Picture src={Tree} />
        <Picture src={Canoe} />
        </Container>
    </div>
  )
}

export default Image