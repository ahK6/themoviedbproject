import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {GetPopularMovies} from '../../store/Actions/MoviesActions';
import {RootState} from '../../store/store';

const Home = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const [currentePage, setCurrentPage] = useState<number>(1);
  const popularMovies = useAppSelector(state => state.Movies);

  useEffect(() => {
    console.log(popularMovies);
  }, [popularMovies]);

  useEffect(() => {
    dispatch(GetPopularMovies(currentePage));
  }, [currentePage]);

  return <View></View>;
};

export default Home;
