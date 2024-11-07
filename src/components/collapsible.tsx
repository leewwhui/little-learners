import {
  ComponentProps,
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
} from "react";

interface CollapsibleContextProps {
  open: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;
}

const CollapsibleContext = createContext<CollapsibleContextProps>({
  open: false,
  onOpenChange: () => {},
});

type CollapsibleProps = CollapsibleContextProps & PropsWithChildren;

export const CollapsibleTrigger: FC<
  PropsWithChildren & ComponentProps<"div">
> = (props) => {
  const { children, ...rests } = props;
  const collapsibleContext = useContext(CollapsibleContext);
  const { onOpenChange, open } = collapsibleContext;

  return (
    <div onClick={() => onOpenChange(!open)} {...rests}>
      {children}
    </div>
  );
};

export const Collapsible: FC<CollapsibleProps> = (props) => {
  const { children, onOpenChange, open } = props;

  return (
    <CollapsibleContext.Provider value={{ open, onOpenChange }}>
      {children}
    </CollapsibleContext.Provider>
  );
};
