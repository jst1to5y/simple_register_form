import { ReactNode } from "react";

const Heading = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div>
      {title}
      {children}
    </div>
  );
};

export default Heading;
