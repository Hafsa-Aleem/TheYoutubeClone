import {Stack,Form,InputGroup,Button} from 'react-bootstrap';
import {useState} from 'react'
import youtube from '../api/youtube';
const SearchBar=({onSubmit})=>{

const [search,setSearch] = useState('')
//console.log({onSubmit})



   return <InputGroup className="mt-3">
    <Form onSubmit={(e)=>{
        e.preventDefault()
        onSubmit(search)
    }}>
    <Stack direction="horizontal" gap={3}>
   <Form.Control
     placeholder="Search your content"
     aria-label="Recipient's username"
     aria-describedby="basic-addon2"
     onChange={e=> setSearch(e.target.value)}
     value={search}
   />
   <Button type="submit" id="basic-addon2">Search</Button>
   </Stack>
   </Form>
 </InputGroup>

}

export default SearchBar