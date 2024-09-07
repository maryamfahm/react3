import React from 'react'


//type interface
type PersonProps = {
  name: string,
  age: number,
  address: string,
  friends: string[]
};

const Person: React.FC<PersonProps> = ({name, age, address, friends}) => {
 
 
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <ul>
        {friends.map((friend, index) =>(
          <li key={index}>{friend}</li>
        ))}
      </ul>

    </div>
  )
}

export default Person