import React, {FC, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Dispatch} from 'redux';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {LoginScreenState} from '../../store/Interfaces/LoginInterface';
import {RootState} from '../../store/store';
import {loginUser} from '../../store/Actions/LoginAction';

const Login: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const loginStatus = useAppSelector(store => store.Login);

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is required'),
    password: yup.string().required('Password is required.'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginScreenState>({resolver: yupResolver(schema)});

  const onSubmit = (data: LoginScreenState) => {
    //return console.log(data);
    dispatch(loginUser(data.email, data.password));
  };

  return (
    <View style={styles.root}>
      <View style={styles.sectionImageContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
      <Text
        style={{
          color: 'white',
          alignSelf: 'center',
          marginVertical: hp(5),
          fontSize: hp(3),
          fontWeight: 'bold',
        }}>
        Iniciar sesión
      </Text>
      <View
        style={{
          width: wp(90),
          paddingVertical: hp(2),
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <View style={{width: wp('80%'), alignSelf: 'center'}}>
          <Text style={{color: '#35324f', fontWeight: 'bold', fontSize: hp(2)}}>
            Email
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput style={styles.input} onChangeText={onChange} />
            )}
            name="email"
          />
          {errors.email?.message && (
            <Text style={{color: '#ea7836', fontSize: hp(2)}}>
              {errors.email?.message}
            </Text>
          )}
        </View>

        <View style={{width: wp('80%'), alignSelf: 'center', marginTop: hp(2)}}>
          <Text style={{color: '#35324f', fontWeight: 'bold', fontSize: hp(2)}}>
            Password
          </Text>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput style={styles.input} onChangeText={onChange} />
            )}
            name="password"
          />
          {errors.password?.message && (
            <Text style={{color: '#ea7836', fontSize: hp(2)}}>
              {errors.password?.message}
            </Text>
          )}
        </View>

        <View style={{marginTop: hp(5)}}>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={[styles.button, {backgroundColor: '#35324f'}]}>
            <Text style={[styles.text]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: hp(5)}}>
        <TouchableOpacity style={[styles.button]}>
          <Text style={[styles.text]}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#35324f',
  },
  sectionImageContainer: {
    width: wp(100),
    height: hp(27),
    backgroundColor: '#ed7bc4',

    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 170,
    height: 170,
    aspectRatio: 1 * 1.4,
  },
  image: {
    flex: 1,
    width: '70%',
    height: '60%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  input: {
    width: wp('80%'),
    alignSelf: 'center',
    marginVertical: hp('1%'),
    fontSize: wp('4%'),
    borderRadius: 20,
    borderWidth: 0.5,
    backgroundColor: '#f6f6f6',
    paddingHorizontal: wp(5),
  },
  button: {
    backgroundColor: '#ed7bc4',
    width: wp('80%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
    fontSize: hp(2),
    fontWeight: 'bold',
  },
});
