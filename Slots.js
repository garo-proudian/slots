// slots.js 
 
import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
 
const emojis = ['🍇', '🍌', '🍒']; // Replace with your desired emojis 
 
const Slots = () => { 
  const [slots, setSlots] = useState([0, 0, 0]); 
  const [spinning, setSpinning] = useState(false); 
 
  const spinSlots = () => { 
    setSpinning(true); 
 
    // Simulate spinning effect 
    const spinInterval = setInterval(() => { 
      setSlots(prevSlots => prevSlots.map(() => Math.floor(Math.random() * emojis.length))); 
    }, 100); 
 
    // Stop spinning after 3 seconds 
    setTimeout(() => { 
      clearInterval(spinInterval); 
      setSpinning(false); 
      checkWin(); 
    }, 3000); 
  }; 
 
  const checkWin = () => { 
    if (slots[0] === slots[1] && slots[1] === slots[2]) { 
      // You win! 
      alert('You win!'); 
    } 
  }; 
 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.slot}>{emojis[slots[0]]}</Text> 
      <Text style={styles.slot}>{emojis[slots[1]]}</Text> 
      <Text style={styles.slot}>{emojis[slots[2]]}</Text> 
 
      <TouchableOpacity style={styles.button} onPress={spinSlots} disabled={spinning}> 
        <Text style={styles.buttonText}>Spin</Text> 
      </TouchableOpacity> 
 
      {spinning && <Text style={styles.spinText}>Spinning...</Text>} 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 
  slot: { 
    fontSize: 50, 
    marginVertical: 10, 
  }, 
  button: { 
    marginTop: 20, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    backgroundColor: 'blue', 
    borderRadius: 5, 
  }, 
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
  }, 
  spinText: { 
    marginTop: 10, 
    fontSize: 18, 
  }, 
}); 
 
export default Slots;