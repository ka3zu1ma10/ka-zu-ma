import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export const alt = 'Kazuma Saito - Product Designer';
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#f8f9fa',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#fdfdfd',
                        border: '16px solid #336633',
                        borderRadius: '8px',
                        width: '800px',
                        height: '450px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                        padding: '40px',
                    }}
                >
                    <h1
                        style={{
                            fontSize: '64px',
                            color: '#336633',
                            marginBottom: '16px',
                            letterSpacing: '-0.02em',
                            fontWeight: 700,
                        }}
                    >
                        Kazuma Saito
                    </h1>
                    <p
                        style={{
                            fontSize: '32px',
                            color: '#4a4a4a',
                            fontWeight: 500,
                            marginBottom: '40px',
                        }}
                    >
                        Product Designer
                    </p>
                    <div style={{ display: 'flex', gap: '32px' }}>
                        <span style={{ fontSize: '24px', color: '#336633', borderBottom: '4px solid #336633', paddingBottom: '4px' }}>UI/UX Design</span>
                        <span style={{ fontSize: '24px', color: '#336633', borderBottom: '4px solid #336633', paddingBottom: '4px' }}>Frontend Dev</span>
                        <span style={{ fontSize: '24px', color: '#336633', borderBottom: '4px solid #336633', paddingBottom: '4px' }}>Design Systems</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
