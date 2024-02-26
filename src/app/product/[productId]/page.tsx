
interface Props {
  params: { [key:string]: string; }
}
export default function ProductMain({ params }: Props) {
  return <div>Post:{ params.productId }</div>;
}
