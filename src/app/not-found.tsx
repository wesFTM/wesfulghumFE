import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <Container className="py-24 text-center">
          <h1 className="text-3xl font-semibold">Page does not exist</h1>
          <p className="mt-3 text-fg-muted">That route is not in this site.</p>
          <div className="mt-8">
            <Button href="/">Back home</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
