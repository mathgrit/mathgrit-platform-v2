// Lokasi: data/courses/number-theory.ts

import type { Course } from '../types';

export const numberTheoryCourses: Course[] = [
  {
    id: "nt-101",
    title: "Pengantar Teori Bilangan",
    thumbnail: "/placeholder.svg?height=200&width=300",
    difficulty: "Beginner",
    duration: "12h",
    topic: "Discrete",
    description: "Jelajahi properti bilangan, bilangan bulat, termasuk keterbagian, bilangan prima, dan kongruensi.",
    rating: 4.7,
    students: 7800,
    
    slides: [
        // --- Slide 1 ---
            {
                content: `
\\chapter{Bilangan}
\\section{Pendahuluan}
    Bilangan dalam matematika seperti halnya titik, garis dan bidang merupakan konsep awal (\\textit{primitive concept}) yaitu unsur yang bersifat mendasar sering dipakai tetapi tidak pernah dapat didefinisikan dengan tepat. Sehingga apabila ditanyakan apakah bilangan itu jawabannya tak akan pernah tepat dan selalu menimbulkan perdebatan. Tetapi jika yang dinyatakan bilangan asli atau bilangan cacah maka jawabannya akan jelas dan pasti.

    Bilangan adalah suatu unsur dalam matematika yang tidak dapat didefinisikan. Kita harus bisa membedakan antara bilangan dengan angka. Bilangan adalah nilai dalam lambang bilangan, sedangkan angka adalah lambang dari sebuah bilangan.

    Contoh: bilangan \\textit{seratus tiga puluh enam}. Dalam Numerasi Hindu Arab ditulis $136$ dan kita sebut sebagai sebuah bilangan. Bilangan tersebut terdiri dari tiga buah angka yaitu $1,\\;2,$ dan $3$.

\\section{Bilangan Kardinal}
    Bilangan Kardinal adalah bilangan yang dipergunakan untuk menyatakan banyaknya suatu objek.

    Contoh yang merupakan bilangan kardinal:
    \\begin{itemize}
        \\item Paman membeli $3$ ekor sapi.
        \\item Aku adalah anak bungsu, kakakku berjumlah $5$ orang.
        \\item Diketahui himpunan $\\{1,\\;3,\\;5,\\;\\dots\\;,\\;13\\}$ banyaknya anggota dalam himpunan tersebut ada $7$.
    \\end{itemize}

\section{Bilangan Ordinal}
    Bilangan Ordinal adalah bilangan yang dipergunakan untuk menyatakan urutan (\textit{rank}).
    Contoh yang merupakan bilangan ordinal :
    \\begin{itemize}
        \\item SMAN $3$ Bandung merupakan sekolah favorit pada tahun ini.
        \\item Dia adalah anak ke$-3$ dari $5$ bersaudara.
        \\item Di kelasnya Irma mendapat juara \\textit{pertama}.
    \\end{itemize}

\section{Bilangan Asli}
    Bilangan Asli (\\textit{Natural Number}) adalah bilangan yang dipergunakan untuk membilang atau menghitung satu-satu. Himpunan bilangan asli biasanya dinotasikan dengan $\mathbb{N}$, diambil dari huruf awal kata \textit{Natural}, dimana $\mathbb{N}=\{1,\;2,\;3,\;\dots\}$

    Himpunan   bilangan   asli   dapat	digolongkan	menjadi beberapa macam diantaranya adalah:
    \\begin{enumerate} 
    \\item Bilangan genap positif, yaitu bilangan asli yang habis dibagi dua, artinya jika bilangan tersebut dibagi dua maka hasilnya tidak bersisa (bersisa nol).

    Ditulis: $\\{2,\\;4,\\;6,\\;\dots \\}$
    Atau: $Genap = \\{ x | x = 2n,\\;\\;\\text{dengan}\\;n\\in\\mathbb{N}\\}$.

    \\item Bilangan ganjil positif, yaitu bilangan asli yang tidak habis dibagi dua, artinya jika bilangan tersebut dibagi dua selalu bersisa satu.

    Ditulis: $\\{1,\\;3,\\;5,\\;\\dots\\}$
    Atau: $Ganjil = \\{y | y = 2n-1,\\;\\text{dengan}\\;n\\in\\mathbb{N}\\}$

    \\item Bilangan prima positif
    Yaitu bilangan asli yang memiliki tepat dua faktor pembagi yang positif, artinya bilangan tersebut hanya habis dibagi oleh satu dan oleh bilangan itu sendiri.

    Ditulis: $\\{2,\\;3,\\;5,\\;7\\;\\dots \\}$

    Formula untuk menentukan bilangan prima diantaranya sebagai berikut:
    \\begin{itemize}
    \\item Mersenne Prime
    Yaitu bilangan prima yang berbentuk $2^n-1$, ditemukan dengan menggunakan komputer oleh \textit{Laura Nickel} dan \textit{Curt} berkebangsaan Amerika Serikat pada tahun 1979.

    \\item Bilangan Permat
    Yaitu bilangan prima yang berbentuk
    $F_n=2^{2n}+1$, berlaku untuk $n=0,\\;1,\\;2,\\;3,\\;4$.

    \\item Prima Euleur, yaitu bilangan prima yang berbentuk:
    $n^2-n+41$ untuk $n=1,\;2,\;3,\;\dots,\;40$, dan\\
    $n^2+n+17$ untuk $n=0,\;1,\;2,\;\dots,\;15$

    \\item Legendre
    Yaitu bilangan prima yang berbentuk:
    $n^2+n+41$ untuk $n=1,\;2,\;3,\;\dots,\;39$, dan\\
    $n^2+29$ untuk $n=0,\;1,\;2,\;\dots,\;28$
    
    \\item Escott
    Yaitu bilangan prima yang berbentuk:
    \\begin{itemize}
        \\item $n^2-79n+1601$ untuk $n=0,\\;1,\\;2,\\;\\dots,\\;79$.
        \\item $n^3+n^2+71$ untuk $n=-14,\\;-13,\\;-11,\\;\\dots,\\;9,\\;10$.
        \\item $n^2+n+41$ untuk $n=-40,\\;-39,\\;-38,\\;\\dots,\\;-1$
    \\end{itemize}

    \\item Miot
    Yaitu bilangan prima yang berbentuk:
    $n^2-2999n+2248541$ untuk bilangan bulat $1460<n<1539$, dan
    $n^3-n^2-17$ untuk $n=0,\\;1,\\;2,\\;\\dots,\\;24$.

    \\item Charbert
    Yaitu bilangan prima yang berbentuk $3n^2+3n+1$ untuk $n=1,\\;2,\\;3,\\;\\dots,\\;11$.
    \\end{itemize}

    \\item Bilangan tersusun (\\textit{Composite}), yaitu bilangan asli yang mempunyai faktor positif lebih dari dua buah, atau dengan kata lain bilangan komposit adalah bilangan asli yang bukan merupakan bilangan prima. Bilangan tersebut adalah $\\{4,\\;6,\\;8,\\;9,\\;10,\\;12,\\;14, 15,\\;\\dots\\}$. 

    \\item Bilangan 1, bukan merupakan bilangan tersusun juga bukan merupakan bilangan prima.

    \\item Bilangan sempurna, yaitu bilangan yang jumlah faktornya adalah sama dengan bilangan tersebut kecuali faktor yang sama dengan bilagan itu sendiri. Berdasarkan penelitian bilangan sempurna dapat dirumuskan sebagai berikut:

    $P=(2^{n-1})(2^n-1)$ dengan $n$ adalah bilangan asli dan $(2^n-1)$ adalah bilangan prima.

    Contoh:  $6$ merupakan bilagan sempurna karena faktor- faktornya $1,\\;2,$ dan $3$. Jika bilangan-bilangan tersebut dijumlahkan $1 + 2 + 3$ hasilnya adalah $6$.

    \\end{enumerate}
                    `
            },
        // --- Slide 2 ---
            {
                content: `
                    \\section{The Limit Formula}
                    The limit of $f(x)$ as $x$ approaches $a$ is written as:
                    $\\lim_{x \\to a} f(x) = L$
                    This expression means that the value of $f(x)$ gets arbitrarily close to $L$ as $x$ gets closer and closer to $a$.
                    `
            },
        ],
    
  },
];