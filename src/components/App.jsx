import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Nav } from '#components/Nav/Nav';

const Home = lazy(() => import('#pages/Home/Home'));
const Movies = lazy(() => import('#pages/Movies/Movies'));
const MovieDetails = lazy(() => import('#pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('#components/Cast/Cast'));
const Reviews = lazy(() => import('#components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          {/* <Route path="/movies" exact component={Movies} />*/}
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
