import Counter from '../../ui/main/Counter';

export default function counterPage() {
  return (
    
        <section className="flex flex-col">
          <p style={{"bgGradient": "linear(to-l, #7928CA, #FF0080)",
            "bgClip": "text", "fontSize":"6xl", "fontWeight":"extrabold"}}>
            Bienvenido a la Web3
          </p>
          <Counter />
        </section>

  );
}
