import { View, Text, Button, StyleSheet } from "react-native";
import useAuth from "../../hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native"
import React , {useCallback, useState}from "react";
import { size } from "lodash";
import {  getPokemonFavoritesApi  } from "../../api/favorite";


export default function UserData() {

  const [total, setTotal] = useState(0)

  useFocusEffect(
    useCallback(()=>{
      (async ()=>{
        try {
          const response = await getPokemonFavoritesApi()
          setTotal(size(response))
        } catch (error) {
          throw error
        }
      }
      )();
    }, [])
  )
  const { auth, logout } = useAuth();
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock} >
        <Text style={styles.title} >Bienvenido</Text>
        <Text style={styles.title} >
          {`${auth.firstName} ${auth.lastName}` }
        </Text>
      </View>
      <View style={styles.dataContent} >
        <ItemMenu title="Nombre" text={`${auth.firstName} ${auth.lastName}` } />
        <ItemMenu title="Username" text={`${auth.username}` } />
        <ItemMenu title="Email" text={auth.email} />
        <ItemMenu title="Total favoritos" text={`${total} pokemons`} />
      </View>
      <Button title="Desconectarse" onPress={logout} style={styles.btnLogout}></Button>
    </View>
  );
}

function ItemMenu(props) {
  const { title , text } = props
  return(
    <View style={ styles.ItemMenu}>
      <Text style={styles.itemMenuTitle}>
        {title}
      </Text>
      <Text>
        {text}
      </Text>
    </View>
  )  
}
const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock:{
    marginBottom: 30,

  },
  title:{
    fontWeight: 'bold',

  },
  dataContent:{
    marginBottom: 20
  },
  ItemMenu:{
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF"
  },
  itemMenuTitle:{
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,

  },
  btnLogout:{
    paddingTop:20
  }
});
