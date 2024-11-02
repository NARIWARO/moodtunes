import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MoodCard = (props) => {
  return (
    <div className="flex-grow basis-3/5 my-2">
      <Card className="flex flex-row ">
        <CardHeader>
          <CardTitle>Feeling</CardTitle>
          <CardDescription>your current mood status</CardDescription>
        </CardHeader>
        <CardContent className="flex ">
          <p>{props.finalexp}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoodCard;
