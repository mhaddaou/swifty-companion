import { Link } from 'expo-router';
import { StyleSheet, Text, View,Image,ImageBackground } from "react-native";
import { Tabs } from 'expo-router';
import { useState } from 'react';


export default function Page() {
  // <ImageBackground source={image} resizeMode="cover" style=
  const [loading, setLoading] = useState(false);
  return (
   <ImageBackground source={require('./../assets/images/background.png')} onLoadStart={() => setLoading(true)} onLoad={() => setLoading(false)} style={styles.container} >
    <View style={styles.space}>
    <View className=''>
      <Image style={styles.img}  source={require('./../assets/icons/logo.png')} alt='icon' height={100} width={50}/>
    </View>
    <View style={{width: '100%', backgroundColor: 'red'}}>
      <Link style={styles.btn} href='/auth'>go</Link>
    </View>
    </View>

   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 25,
  },
  img:{
    paddingHorizontal: 50,
    
    

  },
  txt:{
    
  textShadowOffset: {width: 10, height: 10},
  textShadowRadius: 10,
  textShadowColor: "blue",


  }

  ,space:{
    height: '55%',
    display: 'flex',
    flexDirection : 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn:{
    width: '70%',
    backgroundColor: 'blue',
  }
 
});



// exp://iwq5tqe-anonymous-8081.exp.direct