import SqaureButton from "../buttons/SquareButton";
import Input from "../inputs/Input";
import { useRouter } from "next/router";
import ImageDropzone from "../images/ImageDropZone";
import { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore";
import { fireStore, storage } from "../../firebase";

export default function AddListingForm() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [rent, setRent] = useState("");
  const [towncity, setTownCity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [imagesURLs, setImagesURLs] = useState<string[]>([]); // image urls from firebase storage
  let amenities: string[] = [];

  // image upload progress variables
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [totalImages, setTotalImages] = useState(0);
  const [currentUploadingImage, setCurrentUploadingImage] = useState(0);
  const [ownerphone, setOwnerPhone] = useState("");
  const [ownername, setOwnerName] = useState("");
  const [ownersurname, setOwnerSurname] = useState("");
  const [owneremail, setOwnerEmail] = useState("");


  function uploadImages(theimages: FileList) {
    setIsUploading(true);
    setTotalImages(theimages.length);
    Array.from(theimages).forEach((image, i) => {
      setCurrentUploadingImage(i + 1);
      //uploading image
      const storageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          alert(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImagesURLs((prev) => [...prev, downloadURL]);
          });
        }
      );
    });
  }



  useEffect(() => {
      if (typeof window !== 'undefined') {
      // code that accesses localStorage goes here
      setOwnerPhone(localStorage.getItem("phonenumber") as string);
      setOwnerName(localStorage.getItem("firstname") as string);
      setOwnerSurname(localStorage.getItem("lastname") as string);
      setOwnerEmail(localStorage.getItem("email") as string);
       
      }

    if (imagesURLs.length === totalImages) {
      setIsUploading(false);
    }
    console.log("theimage urls");
    console.log(imagesURLs);
  }, [imagesURLs]);

  const addAmmenties = (ammenity: string) => {
    if (amenities.includes(ammenity)) {
      amenities.splice(amenities.indexOf(ammenity), 1); //remove the ammenity
    } else {
      amenities.push(ammenity);
    }
  };

  const handleSubmit = () => {
    try {
      const property = addDoc(collection(fireStore, "properties"), {
        title: title,
        description: description,
        location: location,
        towncity: towncity,
        rent: rent,
        amenities: amenities,
        isApproved: false,
        ownerphone: ownerphone,
        owneremail: owneremail,
        ownername: ownername,
        ownersurname: ownersurname,
        images: imagesURLs,
      });
      router.push("/dashboard/agent/listing-submission-success");
    } catch (error) {
      //alert("Error adding document: ", error.message);
      router.push("/dashboard/agent/listing-submission-failed");
    }
  };

  return (
    <div className="p-12 bg-white rounded shadow-lg">
      <form
        className="grid grid-cols-2 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex flex-col col-span-2 md:col-span-1  gap-1">
          <text>Title</text>
          <Input
            required
            placeholder="eg One Room"
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <text>Monthly Rent</text>
          <Input
            required
            placeholder="eg 100"
            type="number"
            onChange={(e) => {
              setRent(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <text>Town / City</text>
          <Input
            required
            placeholder="Harare"
            type="text"
            onChange={(e) => {
              setTownCity(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col col-span-2 md:col-span-1 gap-1">
          <text>Location</text>
          <Input
            required
            placeholder="Waterfalls"
            type="text"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </div>
        <div className=" relative flex flex-col col-span-2 gap-1">
          <text>Images</text>
          <ImageDropzone
            onChange={(e) => {
              uploadImages(e.target.files as FileList);
            }}
          />
          {isUploading ? (
            <div className=" absolute flex items-center justify-center bg-gray-100 w-full h-full flex-col">
              <text>
                Uploading {currentUploadingImage} of {totalImages}
              </text>
              <text>{Math.floor(uploadProgress)}%</text>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <div className="grid grid-cols-4 gap-1 mt-4">
            {imagesURLs.length > 0
              ? imagesURLs.map((image, i) => (
                  <img
                    src={image}
                    height={100}
                    width={110}
                    className="rounded-xl"
                  />
                ))
              : null}
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <text>Description</text>
          <textarea
            rows={5}
            placeholder="describe the property"
            className="p-2 border-2 border-gray-500 rounded"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col col-span-2 gap-1">
          <text>Amenities</text>
          <div className="grid grid-cols-4">
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="parking"
                name="parking"
                value="parking"
                onChange={() => {}}
              />
              <text>Parking Space</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="borehole"
                value="borehole"
                name="borehole"
                onChange={() => {
                  addAmmenties("borehole");
                }}
              />
              <text>Borehole</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="zesa"
                name="zesa"
                value="zesa"
                onChange={() => {
                  addAmmenties("zesa");
                }}
              />
              <text>ZESA</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="durawall"
                name="durawall"
                value="durawall"
                onChange={() => {
                  addAmmenties("durawall");
                }}
              />
              <text>Durawall / Fence</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="inclusivebills"
                name="inclusivebills"
                value="inclusivebills"
                onChange={() => {
                  addAmmenties("inclusive bills");
                }}
              />
              <text>Bills Inclusive</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="sharedbathroom"
                name="sharedbathroom"
                value="sharedbathroom"
                onChange={() => {
                  addAmmenties("shared bathroom");
                }}
              />
              <text>Shared Bathroom</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="ownentrance"
                name="ownentrance"
                value="onwentrance"
                onChange={() => {
                  addAmmenties("own entrance");
                }}
              />
              <text>Own Entrace</text>
            </div>
            <div className="flex items-center col-span-2 md:col-span-1 justify-center gap-2">
              <input
                type="checkbox"
                id="ensuite"
                name="ensuit"
                value="ensuit"
                onChange={() => {
                  addAmmenties("ensuite");
                }}
              />
              <text>Ensuite</text>
            </div>
          </div>
        </div>
        <SqaureButton
          text="Add Property"
          onClick={() => router.push("/dashboard/admin")}
        />
      </form>
    </div>
  );
}
