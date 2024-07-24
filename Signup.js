import React, {useState} from 'react';
import {View,Text,TouchableOpacity,Alert} from 'react-native';
import { Formik } from 'formik';
import {Octicons,Ionicons,Fontisto} from '@expo/vector-icons';
const {brand,darkLight,primary}=colors;
import { StatusBar } from 'expo-status-bar';
import KeyboardAvoidingWrapper from './app/KeyboardAvoidingWrapper';
import { getAuth, createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth';
import { auth } from './firebaseConfig';
import {
    StyledContainer,
    InnerContainer, 
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent

} from './app/styles';
const Signup =({navigation})=> {
    const [hidePassword,setHidePassword]=useState(true);
  const handleSignUp = async (email, password,FullName) => {
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      await updateProfile(auth.currentUser, { displayName: FullName });
      Alert.alert('Account created successfully!');
      navigation.navigate('WelcomeScreen',{ FullName,email });
    } catch (error) {
      Alert.alert('Sign Up failed');
    }
  };
  return (
    <KeyboardAvoidingWrapper>
        <StyledContainer>
        <StatusBar style="dark"/>
    <InnerContainer>
    <PageTitle>Signup</PageTitle>
    <SubTitle>Enter the details to continue</SubTitle>
    <Formik 
    initialValues={{email:'',password:'', FullName:'',Confirmpassword:''}}
    onSubmit={({ email, password,FullName }) => handleSignUp(email,password,FullName)}
    >{({handleChange,handleBlur,handleSubmit,values})=>(
        <StyledFormArea>
            <MyTextInput
                label= "Full Name"
                icon="person"
                placeholder="Example@Fullname"
                placeholderTextColor={darkLight}
                onChangeText= {handleChange('FullName')}
                onBlur={handleBlur('FullName')}
                value={values.FullName}
                keyboardType="default" 
                />
            <MyTextInput
                label= "Email Address"
                icon="mail"
                placeholder="Example@gmail.com"
                placeholderTextColor={darkLight}
                onChangeText= {handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                />
                
              <MyTextInput
                label= "Password"
                icon="lock"
                placeholder="Must be of 6 characters"
                placeholderTextColor={darkLight}
                onChangeText= {handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                />
                <MyTextInput
                label= "Confirm Password"
                icon="lock"
                placeholder="Must match with the upper password"
                placeholderTextColor={darkLight}
                onChangeText= {handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
                />
            <MsgBox>
                ...
            </MsgBox>
            <StyledButton onPress={handleSubmit}>
                <ButtonText>
                    SignUp
                </ButtonText>
            </StyledButton>
            <Line/>
           
        <ExtraView>
            <ExtraText>
                Already have an account?
            </ExtraText>
            <TextLink onPress={() => navigation.navigate('Login')}>
                    <TextLinkContent>Sign In</TextLinkContent>
                  </TextLink>
        </ExtraView>
        </StyledFormArea>

    )}
     </Formik>
    </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
   
  );
};
 const MyTextInput=({label,icon,isPassword,hidePassword,setHidePassword,...props})=>{
      return(
          <View>
            <LeftIcon>
                <Octicons name={icon} size={20} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                
                <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off': 'eye'} size={20} color={darkLight} />
                </RightIcon>
            )}
          </View>
      );
};

export default Signup;
