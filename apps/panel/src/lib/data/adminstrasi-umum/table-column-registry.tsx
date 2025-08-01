import {
  JENIS_PERATURAN,
  JENIS_SURAT_AGENDA,
  type SelectAgenda,
  type SelectBerita,
  type SelectEkspedisi,
  type SelectInventaris,
  type SelectKeputusanKepalaDesa,
  type SelectLembaran,
  type SelectPendudukSementara,
  type SelectPeraturan,
  type SelectRAB,
  type SelectTanah,
  type SelectTanahKas,
} from "@pintudesa/db/schema"
import { formatDate } from "@pintudesa/utils"
import type { ColumnDef } from "@tanstack/react-table"

import {
  jenisPeraturanLabelMap,
  jenisSuratAgendaLabelMap,
} from "@/lib/utils/mapper"

export const agendaColumns: ColumnDef<SelectAgenda, unknown>[] = [
  {
    accessorKey: "jenisSurat",
    header: "Jenis Surat",
    meta: {
      filterVariant: "select",
      selectOptions: JENIS_SURAT_AGENDA.map(
        (value) => jenisSuratAgendaLabelMap[value],
      ),
    },
    cell: ({ getValue }) => (
      <span className="max-w-[180px] truncate font-medium">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "uraian",
    header: "Uraian",
    cell: ({ getValue, row }) => {
      const uraian = getValue<string>()
      const surat = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{uraian}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {surat.keteranganTambahan}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {surat.createdAt && (
              <span>Dibuat: {formatDate(new Date(surat.createdAt), "LL")}</span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "keteranganTambahan",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Keterangan Tambahan</span>,
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]
export const beritaColumns: ColumnDef<SelectBerita, unknown>[] = [
  {
    accessorKey: "judul",
    header: "Judul",
    cell: ({ getValue, row }) => {
      const judul = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{judul}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.uraian}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {data.createdAt && (
              <span>Dibuat: {formatDate(new Date(data.createdAt), "LL")}</span>
            )}
            {data.updatedAt && (
              <span>
                Diperbarui: {formatDate(new Date(data.updatedAt), "LL")}
              </span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "slug",
    header: "Slug",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "uraian",
    header: () => <span className="hidden lg:inline">Uraian</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    meta: { filterVariant: "range", isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]
export const rabColumns: ColumnDef<SelectRAB, unknown>[] = [
  {
    accessorKey: "bidang",
    header: "Bidang",
    cell: ({ getValue, row }) => {
      const bidang = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{bidang}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.kegiatan}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {data.createdAt && (
              <span>Dibuat: {formatDate(new Date(data.createdAt), "LL")}</span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "waktuPelaksanaan",
    header: "Waktu Pelaksanaan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "kegiatan",
    header: () => <span className="hidden lg:inline">Kegiatan</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]

export const peraturanColumns: ColumnDef<SelectPeraturan, unknown>[] = [
  {
    accessorKey: "jenisPeraturan",
    header: "Jenis Peraturan",
    meta: {
      filterVariant: "select",
      selectOptions: JENIS_PERATURAN.map(
        (value) => jenisPeraturanLabelMap[value],
      ),
    },
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "judul",
    header: "Judul",
    cell: ({ getValue, row }) => {
      const judul = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{judul}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.uraian}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            <span>
              Ditetapkan:{" "}
              {formatDate(new Date(data.tanggal_surat_ditetapkan), "LL")}
            </span>
            {data.tanggalSuratDiundangkan && (
              <span>
                Diundangkan:{" "}
                {formatDate(new Date(data.tanggalSuratDiundangkan), "LL")}
              </span>
            )}
          </span>
        </div>
      )
    },
  },

  {
    accessorKey: "nomorSuratDitetapkan",
    header: "No. Ditetapkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "tanggal_surat_ditetapkan",
    header: "Tgl. Ditetapkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
  {
    accessorKey: "nomorSuratDilaporkan",
    header: "No. Dilaporkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "tanggalSuratDilaporkan",
    header: "Tgl. Dilaporkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]
export const pendudukSementaraColumns: ColumnDef<
  SelectPendudukSementara,
  unknown
>[] = [
  {
    accessorKey: "nama",
    header: "Nama",
    cell: ({ getValue, row }) => {
      const nama = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{nama}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.nomorIndentitas}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            <span>
              Datang: {formatDate(new Date(data.tanggalDatang), "LL")}
            </span>
            {data.tanggalPergi && (
              <span>
                Pergi: {formatDate(new Date(data.tanggalPergi), "LL")}
              </span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "nomorIndentitas",
    header: "No. Identitas",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "jenisKelamin",
    header: "Jenis Kelamin",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "tempatLahir",
    header: "Tempat Lahir",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "tanggalLahir",
    header: "Tanggal Lahir",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
  {
    accessorKey: "pekerjaan",
    header: "Pekerjaan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "kebangsaan",
    header: "Kebangsaan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "datangDari",
    header: "Datang Dari",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "keteranganTambahan",
    header: () => <span className="hidden lg:inline">Keterangan Tambahan</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]
export const keputusanKepalaDesaColumns: ColumnDef<
  SelectKeputusanKepalaDesa,
  unknown
>[] = [
  {
    accessorKey: "nomorSurat",
    header: "Nomor Surat",
    cell: ({ getValue }) => (
      <span className="line-clamp-2 text-ellipsis">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "judul",
    header: "Judul",
    cell: ({ getValue }) => (
      <span className="line-clamp-2 text-ellipsis">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "uraian",
    header: "Uraian",
    cell: ({ getValue, row }) => {
      const uraian = getValue<string>()
      const surat = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{uraian}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {surat.keteranganTambahan}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {surat.createdAt && (
              <span>Dibuat: {formatDate(new Date(surat.createdAt), "LL")}</span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "nomorLaporan",
    header: "Nomor Laporan",
    cell: ({ getValue }) => (
      <span className="line-clamp-2 text-ellipsis">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "keteranganTambahan",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Keterangan Tambahan</span>,
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]

export const lembaranColumns: ColumnDef<SelectLembaran, unknown>[] = [
  {
    accessorKey: "jenisPeraturan",
    header: "Jenis Peraturan",
    meta: {
      filterVariant: "select",
      selectOptions: JENIS_PERATURAN.map(
        (value) => jenisPeraturanLabelMap[value],
      ),
    },

    cell: ({ getValue, row }) => {
      const jenisPeraturan = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">
            {jenisPeraturan}
          </span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.keterangan}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            <span>
              Ditetapkan: {formatDate(new Date(data.tanggalDitetapkan), "LL")}
            </span>
            <span>
              Diundangkan: {formatDate(new Date(data.tanggalDiundangkan), "LL")}
            </span>
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "nomorDitetapkan",
    header: "No. Ditetapkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "tanggalDitetapkan",
    header: "Tgl. Ditetapkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
  {
    accessorKey: "nomorDiundangkan",
    header: "No. Diundangkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "tanggalDiundangkan",
    header: "Tgl. Diundangkan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
  {
    accessorKey: "tentang",
    header: "Tentang",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "keterangan",
    header: () => <span className="hidden lg:inline">Keterangan</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {formatDate(new Date(val), "LL")}
        </span>
      )
    },
  },
]

export const inventarisColumns: ColumnDef<SelectInventaris, unknown>[] = [
  {
    accessorKey: "jenisInventaris",
    header: "Jenis Inventaris",
    cell: ({ getValue, row }) => {
      const jenis = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[220px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{jenis}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.keteranganTambahan}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {data.createdAt && (
              <span>
                Dibuat: {new Date(data.createdAt).toLocaleDateString()}
              </span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "tahun",
    header: "Tahun",
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
  {
    accessorKey: "keteranganTambahan",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Keterangan Tambahan</span>,
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {val ? new Date(val).toLocaleDateString() : ""}
        </span>
      )
    },
  },
]

export const ekspedisiColumns: ColumnDef<SelectEkspedisi, unknown>[] = [
  {
    accessorKey: "nomorSurat",
    header: "Nomor Surat",
    cell: ({ getValue, row }) => {
      const nomor = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[220px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{nomor}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.keteranganTambahan}
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {data.createdAt && (
              <span>
                Dibuat: {new Date(data.createdAt).toLocaleDateString()}
              </span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "tanggalSurat",
    header: "Tanggal Surat",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {val ? new Date(val).toLocaleDateString() : ""}
        </span>
      )
    },
  },
  {
    accessorKey: "ditujukan",
    header: "Ditujukan",
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "tanggalPengiriman",
    header: "Tanggal Pengiriman",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {val ? new Date(val).toLocaleDateString() : ""}
        </span>
      )
    },
  },
  {
    accessorKey: "uraianSurat",
    header: "Uraian Surat",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "keteranganTambahan",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Keterangan Tambahan</span>,
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    meta: { isHiddenOnMobile: true },
    header: () => <span className="hidden lg:inline">Dibuat</span>,
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {val ? new Date(val).toLocaleDateString() : ""}
        </span>
      )
    },
  },
]

export const tanahKasColumns: ColumnDef<SelectTanahKas, unknown>[] = [
  {
    accessorKey: "asal",
    header: "Asal",
    cell: ({ getValue, row }) => {
      const asal = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{asal}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            Nomor Sertifikat: {data.nomorSertifikat}
          </span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            Luas Tanah: {data.luasTanah} m²
          </span>
          {data.createdAt && (
            <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
              <span>Dibuat: {formatDate(new Date(data.createdAt), "LL")}</span>
            </span>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: "nomorSertifikat",
    header: "Nomor Sertifikat",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<number>()}
      </span>
    ),
  },
  {
    accessorKey: "luasTanah",
    header: "Luas Tanah",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<number>()} m²
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Dibuat",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {val ? new Date(val).toLocaleDateString() : ""}
        </span>
      )
    },
  },
]

export const tanahColumns: ColumnDef<SelectTanah, unknown>[] = [
  {
    accessorKey: "namaPemilik",
    header: "Nama Pemilik",
    cell: ({ getValue, row }) => {
      const nama = getValue<string>()
      const data = row.original
      return (
        <div className="flex max-w-[240px] flex-col">
          <span className="line-clamp-2 truncate font-medium">{nama}</span>
          <span className="text-muted-foreground mt-1 line-clamp-2 truncate text-[10px] lg:hidden">
            {data.totalLuas} m²
          </span>
          <span className="text-muted-foreground mt-1 flex flex-col gap-0.5 text-[10px] lg:hidden">
            {data.createdAt && (
              <span>Dibuat: {formatDate(new Date(data.createdAt), "LL")}</span>
            )}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "totalLuas",
    header: "Total Luas",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<number>()} m²
      </span>
    ),
  },
  {
    accessorKey: "hakMilik",
    header: "Hak Milik",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "hakGunaBangunan",
    header: "Hak Guna Bangunan",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => (
      <span className="hidden text-ellipsis lg:line-clamp-2">
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Dibuat",
    meta: { isHiddenOnMobile: true },
    cell: ({ getValue }) => {
      const val = getValue<string | Date>()
      return (
        <span className="hidden lg:inline">
          {val ? new Date(val).toLocaleDateString() : ""}
        </span>
      )
    },
  },
]

export const tableColumnRegistry = {
  agenda: agendaColumns,
  berita: beritaColumns,
  rab: rabColumns,
  peraturan: peraturanColumns,

  pendudukSementara: pendudukSementaraColumns,
  keputusanKepalaDesa: keputusanKepalaDesaColumns,

  lembaran: lembaranColumns,

  inventaris: inventarisColumns,
  ekspedisi: ekspedisiColumns,

  tanahKas: tanahKasColumns,

  tanah: tanahColumns,
  users: [
    { header: "Email", accessorKey: "email" },
    { header: "Name", accessorKey: "name" },
    { header: "Username", accessorKey: "username" },
    { header: "Image", accessorKey: "image" },
    { header: "Phone Number", accessorKey: "phoneNumber" },
    { header: "About", accessorKey: "about" },
    { header: "Role", accessorKey: "role", meta: { filterVariant: "select" } },
    {
      header: "Dibuat",
      accessorKey: "createdAt",
      meta: { filterVariant: "range" },
    },
    {
      header: "Updated At",
      accessorKey: "updatedAt",
      meta: { filterVariant: "range" },
    },
  ],
} as const
