
# **Navigation and Routing in React Native**

## **Project Overview**
This project demonstrates the implementation of navigation and routing in a React Native application. It includes two main screens, `HomeScreen` and `AboutScreen`, connected using a stack navigator from the `@react-navigation/native` library. The app also utilizes reusable layout components and includes features such as a to-do list placeholder, a shared layout, and an Easter egg on the About screen.

---

## **Features**
1. **Navigation**:
   - Stack navigation with `@react-navigation/native` and `@react-navigation/native-stack`.
   - Navigate between `HomeScreen` and `AboutScreen`.

2. **Screens**:
   - **HomeScreen**:
     - Displays a placeholder for a to-do list.
     - Includes a button to navigate to the About screen.
   - **AboutScreen**:
     - Displays the app name, developer's name, and the current date.
     - Easter egg: Clicking on the developer’s name displays a hidden message.

3. **Reusable Layout**:
   - Shared `MainLayout` wraps the content of each screen.
   - Includes a footer for consistent layout styling.

4. **Optional Enhancements** (Implemented):
   - Basic styling for improved UI.
   - Easter egg functionality.

---

## **Folder Structure**
```
src/
  components/
    ToDoList.jsx        # Placeholder for the to-do list
    ToDoForm.jsx        # Placeholder for adding a new to-do item
  screens/
    HomeScreen.jsx      # Home screen of the app
    AboutScreen.jsx     # About screen of the app
  layouts/
    MainLayout.jsx      # Shared layout component
  App.jsx               # Main app file with navigation setup
```

---

## **Dependencies**
The project uses the following libraries:
1. `@react-navigation/native`
2. `@react-navigation/native-stack`
3. `react-native-gesture-handler`
4. `react-native-safe-area-context`
5. `react-native-screens`

---

## **Installation and Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/navigation-and-routing.git
   cd navigation-and-routing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the app:
   ```bash
   npx react-native start
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```

---

## **Usage**
1. On the **Home screen**, view the to-do list placeholder and click the **"Go to About"** button to navigate to the About screen.
2. On the **About screen**, view app details. Click on the developer’s name to trigger the Easter egg.

---

## **Optional Enhancements**
1. Add a **Drawer Navigator** for additional navigation options.
2. Enhance UI with advanced styling.
3. Implement a full to-do list with add, delete, and edit functionality.

---

## **Submission**
- The project files are organized and compressed (excluding `node_modules`).
- The project repository is available at:
  [GitHub Repository](https://github.com/your-username/navigation-and-routing)

