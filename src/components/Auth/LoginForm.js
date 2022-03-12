import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

export default function LoginForm() {

  const formik = useFormik({
    initialValues:initialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (data) => {
      console.log("formulario enviado...", data);

    }
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button title="Entrar"  onPress={formik.handleSubmit}/>
      <Text style={styles.error} >{formik.errors.username}</Text>
      <Text style={styles.error} >{formik.errors.password}</Text>
    </View>
  );
}
function validationSchema(){
  return{
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La contrasena es requerida")
  }
}
function initialValues() {
  return{
    username:"",
    password: '',

  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error:{
    textAlign: 'center',
    color: "#f00",
    marginTop: 20
  }
});
