import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./custom/button"
import { useState } from "react"

type Stock = {
	title: string;
	subTitle: string;
	price: string;
	percentage: string;
  }

export function CardWithForm({ setState }) {

	const styles: React.CSSProperties = {
		padding: "100px",
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		width: "100%",
		top: "0",
		left: "0",
		display: "flex",
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
	}

	const teamStock: Stock = {
		title: "TEAM",
		subTitle: "Atlassian Corporation",
		price: "$300",
		percentage: "+100%"
	  };

	const [selectStock, setStock] = useState<Stock>(teamStock);

	const handleChange = (value: string) => {
		switch(value) {
			case 'TEAM':
				return setStock(teamStock);
			case 'GOOG':
				return setStock({title: "GOOG", subTitle: "Alphabet Inc.", price: "$157.46", percentage: "+0.37%"})
			case 'AMZN':
				return setStock({title: "AMZN", subTitle: "Amazon.com, Inc.", price: "$179.22", percentage: "+1.24%"})
			case 'NFLX':
				return setStock({title: "NFLX", subTitle: "Netflix, Inc.", price: "$610.56", percentage: "+0.51%"})
			default:
				return setStock(teamStock);
		  }

	  };


	return (
		<div style={styles}>
			<Card className="w-[350px]">
				<CardHeader>
					<CardTitle>Create New Alert</CardTitle>
					<CardDescription>Select which stock you want to be alerted on.</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input id="name" placeholder="Name of your alert" />
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="framework">Stock sybols</Label>
								<Select onValueChange={value => handleChange(value)} defaultValue="TEAM">
									<SelectTrigger id="framework">
										<SelectValue placeholder="Select" />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="TEAM">TEAM</SelectItem>
										<SelectItem value="GOOG">GOOG</SelectItem>
										<SelectItem value="AMZN">AMZN</SelectItem>
										<SelectItem value="NFLX">NFLX</SelectItem>
									</SelectContent>
								</Select>
							</div>

							<div className="">
								<Label>Current Price</Label>
								<br/>
								<div className="flex justify-between" style={{fontSize:25}}>
									<div className="flex flex-col">
										<text>{selectStock.title}</text>
										<text style={{fontSize:15}}>{selectStock.subTitle}</text>
									</div>
									<div className="flex flex-col">
										<text>{selectStock.price}</text>
										<text style={{fontSize:15, color:'green'}}>{selectStock.percentage}</text>
									</div>
								</div>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" onClick={() => setState(false)}>Cancel</Button>
					<Button>Next</Button>
				</CardFooter>
			</Card>
		</div>
	)
}
