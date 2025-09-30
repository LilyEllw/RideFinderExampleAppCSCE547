import { CartItem } from "../../models/cartItem"

type cartCardProps = {
	cartItem: CartItem
}

export default function cartCard(props: cartCardProps) {
	const { cartItem } = props
	console.log(cartItem)
	return (
		<div>
			<div>
				Park Name: {cartItem.park.parkName}
			</div>
			<div>
				Location: {cartItem.park.location}
			</div>
			<div>
				Adults: {cartItem.numAdults} * ${cartItem.park.adultPrice} = ${(cartItem.numAdults * cartItem.park.adultPrice).toFixed(2)}
			</div>
			<div>
				Children: {cartItem.numKids} * ${cartItem.park.childPrice} = ${(cartItem.numKids * cartItem.park.childPrice).toFixed(2)}
			</div>
		</div>
	)
}