import React from 'react';
import icons from '../icons.svg';

const size = 200;
const About = () => (
  <div className="columns">
    <div className="column">
      <figure style={{display: 'inline-block', height: size, width: size}}>
        <svg style={{height: size, width: size}}>
          <use xlinkHref={`${icons}#backpack`} />
        </svg>
      </figure>
    </div>
    <div className="column is-three-quarters content">
      <h1 className="subtitle is-2">About</h1>
      <p>
        <strong>React Pokedex</strong> is a project made with learning purposes.
      </p>
      <h1>Pokémon Icons</h1>
      <p>
        <a
          href="https://theartificial.com/pokemonicons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Artificial
        </a>
      </p>
      <div className="license">
        <h1 className="subtitle is-2">MIT License</h1>

        <p>
          Copyright (c) 2018{' '}
          <a
            href="https://github.com/magarcia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Martin Garcia Monterde
          </a>
        </p>

        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          &quot;Software&quot;), to deal in the Software without restriction,
          including without limitation the rights to use, copy, modify, merge,
          publish, distribute, sublicense, and/or sell copies of the Software,
          and to permit persons to whom the Software is furnished to do so,
          subject to the following conditions:
        </p>

        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>

        <p>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY
          KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
          OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
          NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
          LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
          OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
          WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  </div>
);

export default About;
