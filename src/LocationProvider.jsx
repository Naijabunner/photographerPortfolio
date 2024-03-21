import { AnimatePresence } from "framer-motion";

function LocationProvider({ children }) {
    return <AnimatePresence mode="popLayout" initial={false}>{children}</AnimatePresence>;
  }
 
export default LocationProvider ;