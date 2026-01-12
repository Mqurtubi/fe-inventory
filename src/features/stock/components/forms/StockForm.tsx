import ViewInArIcon from "@mui/icons-material/ViewInAr";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import { Button, Typography } from "@mui/material";
import AppTextField from "../../../../components/ui/AppTextField";
import SelectProduct from "../filters/SelectProduct";
import useProduct from "../../../product/hooks/useProduct";
import useCreateStock from "../../hooks/useCreateStock";
import { inStock, outStock, adjustStock } from "../../api";

export default function StockForm() {
  const { activeProducts } = useProduct();
  const { form, handleChange, setProductId, setType, resetForm } =
    useCreateStock();

  const submitByType = async () => {
    const payload = {
      productId: form.idProduct,
      qty: Number(form.qty),
      note: form.note,
    };

    if (form.type === "in") return inStock(payload);
    if (form.type === "out") return outStock(payload);
    return adjustStock(payload);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitByType();
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      className="flex flex-col gap-5 border border-slate-300  p-8 bg-white rounded-2xl"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-2">
        <ViewInArIcon color="primary" />
        <Typography>New Movement</Typography>
      </div>
      <div className="flex gap-3">
        <Button
          sx={{
            backgroundColor: form.type === "in" ? "#EAF2FF" : "#F8FAFC",
          }}
          onClick={() => setType("in")}
          size="large"
          startIcon={<FileDownloadOutlinedIcon />}
        >
          Stock In
        </Button>
        <Button
          sx={{
            backgroundColor: form.type === "out" ? "#EAF2FF" : "#F8FAFC",
          }}
          onClick={() => setType("out")}
          size="large"
          startIcon={<FileUploadOutlinedIcon />}
        >
          Stock Out
        </Button>
        <Button
          sx={{
            backgroundColor: form.type === "adjust" ? "#EAF2FF" : "#F8FAFC",
          }}
          onClick={() => setType("adjust")}
          size="large"
          startIcon={<AutorenewIcon />}
        >
          Adjust
        </Button>
      </div>
      <SelectProduct
        product={activeProducts}
        value={form.idProduct}
        handleChange={setProductId}
      />
      <AppTextField
        label="Quantity"
        placeholder="Enter quantity"
        type="number"
        name="qty"
        value={form.qty}
        handleChange={handleChange}
      />
      <AppTextField
        label="Note"
        placeholder="Add a note (optional)"
        type="text"
        name="note"
        value={form.note}
        handleChange={handleChange}
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </form>
  );
}
