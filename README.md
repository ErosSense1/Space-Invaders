# Space-Invaders (Controls)

| Key | Action |  |
| ------------- | ------------- | ------------- |
| Left Arrow | Move to left  | ( < ) |
| Right Arrow | Move to right  | ( > ) | 
| Space | Shoots |

# **Can edit controls with:**

```javascript
  player.keys = {
//In case You want to move up and down
    up: {
      key: "",
      pressed: false
    },
    down: {
      key: "",
      pressed: false
    },
//In case You want to move up and down
    left: {
      key: "Your Key",
      pressed: false
    },
    right: {
      key: "Your Key",
      pressed: false
    },
    shoot: {
      key: " ",
      pressed: false
    }
  };
// This can be found on class.js-( line:15, column: 9 )//
```


