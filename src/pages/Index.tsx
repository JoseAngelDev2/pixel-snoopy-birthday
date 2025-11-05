import { useState } from "react";
import { GiftScreen } from "@/components/GiftScreen";
import { BirthdayScreen } from "@/components/BirthdayScreen";

const Index = () => {
  const [showBirthday, setShowBirthday] = useState(false);

  return (
    <>
      {!showBirthday ? (
        <GiftScreen onOpen={() => setShowBirthday(true)} />
      ) : (
        <BirthdayScreen />
      )}
    </>
  );
};

export default Index;
