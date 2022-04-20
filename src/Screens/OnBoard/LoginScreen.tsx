import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
import LottieView from 'lottie-react-native';
import {LoginScreenState} from '../../store/Interfaces/LoginInterface';
import {RootState} from '../../store/store';
import {loginUser} from '../../store/Actions/LoginAction';
import Input from '../../Components/Inputs/Input';
import PasswordInput from '../../Components/Inputs/PasswordInput';
import TitleLabel from '../../Components/Labels/TitleLabel';
import DarkButton from '../../Components/Buttons/DarkButton';
import LightButton from '../../Components/Buttons/LightButton';
import Label from '../../Components/Labels/Label';
import {capitalizeFirstLetter} from '../../Helpers/CapitalizeFirstLetter';

const Login: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

  const loginStatus = useAppSelector(store => store.Login);

  const [hidePassword, setHidePassword] = useState<boolean>(false);

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
    dispatch(loginUser(data.email, data.password));
  };

  return (
    <ScrollView style={styles.root}>
      <View style={styles.sectionImageContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../assets/images/logo.png')}
          />
        </View>
      </View>
      <TitleLabel
        text={'Iniciar Sesión'}
        textStyle={{
          marginVertical: hp(3),
          fontWeight: 'bold',
          alignSelf: 'center',
        }}
      />

      <View
        style={{
          width: wp(90),
          paddingVertical: hp(2),
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        {loginStatus.status == 'failed' && (
          <Label
            text={capitalizeFirstLetter(loginStatus.errors)}
            textStyle={{color: 'red', marginBottom: 10, alignSelf: 'center'}}
          />
        )}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              onChange={onChange}
              validateError={errors.email?.message}
              label={'Email'}
              includeLabel={true}
            />
          )}
          name="email"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <PasswordInput
              onChange={onChange}
              validateError={errors.password?.message}
              hidePassword={hidePassword}
              setHidePassword={() => {
                setHidePassword(hidePassword ? false : true);
              }}
              label={'Password'}
              rootContainer={{marginTop: 15}}
            />
          )}
          name="password"
        />

        <DarkButton
          OnPress={handleSubmit(onSubmit)}
          ButtonText="Login"
          isLoading={loginStatus.status == 'loading' ? true : false}
          ButtonStyle={{marginTop: 30}}
          ButtonTextStyle={{}}
        />
      </View>
      <LightButton
        OnPress={() => {}}
        ButtonText={'Sign up'}
        ButtonStyle={{marginTop: 35}}
        isLoading={false}
      />
    </ScrollView>
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
});
