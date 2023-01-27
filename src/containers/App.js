import React, { Component } from 'react';
import CardList from '../components/CardList';
import image1 from '../images/spaghetti-bolognese.jpg'
import image2 from '../images/lasagne-bolognese.jpg'
import image3 from '../images/pizza.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          name: 'Spaghetti Bolognese',
          image: image1,
          prepTime: 45,
          category: 'Meat',
          tags: ['pasta', 'italian', 'noodles'],
        },
        {
          name: 'Lasagne Bolognese',
          image: image2,
          prepTime: 75,
          category: 'Meat',
          tags: ['pasta', 'italian', 'noodles'],
        },
        {
          name: 'Pizza',
          image: image3,
          prepTime: 60,
          category: 'Vegetarian',
          tags: ['pizza', 'italian'],
        },
        {
          name: 'Lasagne Bolognese',
          image: image2,
          prepTime: 75,
          category: 'Meat',
          tags: ['pasta', 'italian', 'noodles'],
        },
      ]
    }
  }

  render() {
    return (
      <div className="container mx-auto">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <CardList meals={this.state.meals} />
        </section>
      </div >
    )
  }
}

export default App;
