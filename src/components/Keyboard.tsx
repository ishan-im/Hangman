
const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

import styles from "./Keyboard.module.css"

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
}



export default function Keybord({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {

    return  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem",
    }}
  >
    {KEYS.map(key => {
      const isActive = activeLetters.includes(key)
      const isInactive = inactiveLetters.includes(key)
      return (
        <button
          onClick={() => addGuessedLetter(key)}
          className={`${styles.btn} ${isActive ? styles.active : ""} ${
            isInactive ? styles.inactive : ""
          }`}
          disabled={isInactive || isActive || disabled}
          key={key}
        >
          {key}
        </button>
      )
    })}
  </div>
  
  }